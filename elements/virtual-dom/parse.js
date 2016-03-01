var vd = virtualDom;

var h = vd.h;

function parse_template (template) {
  var json = parse5.parseFragment(template);
  var node = json.childNodes[0];
  var parsed = parse_node(node);
  return parsed;
}

function parse_node (node) {
  var tag = node.tagName;

  if (tag === 'template') {
    return parse_template_repeat(node);
  }

  return parse_tag(node);
}

function parse_tag (node) {
  var tag = node.tagName;
  var attributes = parse_attributes(node);
  var children = parse_children(node);
  return function (ctx, state) {
    return h(tag, attributes(ctx, state), children(ctx, state));
  }
}

function parse_attributes (node) {
  var fixed_attributes = {};
  var variable_attributes = {};
  var event_attributes = {};

  node.attrs.forEach(function (attr) {
    var name = attr.name;
    var value = attr.value;
    var index_of_value = value.indexOf('{{');
    var last_index_of_value = value.lastIndexOf('}}');
    var is_variable = index_of_value === 0 && last_index_of_value === value.length - 2;
    var is_event = name.indexOf('on-') === 0;

    if (is_variable) {
      value = value.substring(2, last_index_of_value);
      variable_attributes[name] = value;
    } else if (is_event) {
      name = 'ev' + name.substring(2);
      event_attributes[name] = value;
    } else {
      fixed_attributes[name] = value;
    }
  });

  return function (ctx, state, details) {
    var attributes = {};
    var _variable_attributes = {};
    var _event_attributes = {};

    Object.keys(variable_attributes).forEach(function (attribute) {
      _variable_attributes[attribute] = state[variable_attributes[attribute]];
    });

    Object.keys(event_attributes).forEach(function (attribute) {
      _event_attributes[attribute] = function (ev) {
        ev.__item = state.__item;
        ev.__index = state.__index;
        ctx[event_attributes[attribute]].call(ctx, ev);
      }
    });

    Object.assign(attributes, fixed_attributes);
    Object.assign(attributes, _variable_attributes);
    Object.assign(attributes, _event_attributes);

    return attributes;
  };
}

function parse_children (node) {
  var nodes = parse_nodes(node.childNodes);

  return function (ctx, state) {
    var children = [];

    nodes.forEach(function (f) {
      var vd = f(ctx, state);
      if (Array.isArray(vd)) {
        Array.prototype.push.apply(children, vd);
      } else {
        children.push(vd)
      }
    });

    return children;
  };
}

function parse_nodes (nodes) {
  if (nodes.length === 0) {
    return [];
  }
  var head = parse_node(nodes.shift());
  var tail = parse_nodes(nodes);
  var list = [head].concat(tail);
  return list;
}

function parse_template_repeat (node) {
  var parsed_attributes = parse_attributes(node);

  var parsed_children = parse_children(node.content);

  return function (ctx, state) {
    var attributes = parsed_attributes(ctx, state);
    var items = attributes['repeat'];

    var nodes = [];

    items.forEach(function (item, index) {
      var _state = {};

      Object.assign(_state, state);
      Object.assign(_state, { __item: item, __index: index });

      var children = parsed_children(ctx, _state);

      Array.prototype.push.apply(nodes, children);
    });

    return nodes;
  }
}