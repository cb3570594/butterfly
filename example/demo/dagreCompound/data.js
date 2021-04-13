'use strict';

const Node = require('./node.js');
const Edge = require('./edge');

const nodesData = {
  nodes: [
    {
      id: '1',
      label: '时间处理',
      className: 'icon-background-color',
      iconType: 'icon-shijian',
      Class: Node,
      endpoints: [{
        id: 'bottom',
        orientation: [0, 1],
        pos: [0.5, 0]
      }]
    },
    {
      id: '2',
      label: '算数运算',
      className: 'icon-background-color',
      iconType: 'icon-webicon310',
      Class: Node,
      endpoints: [{
        id: 'bottom',
        orientation: [0, 1],
        pos: [0.5, 0]
      }]
    },
    {
      id: '3',
      label: '交运算',
      className: 'icon-background-color',
      iconType: 'icon-guanlian',
      Class: Node,
      endpoints: [{
        id: 'top',
        orientation: [0, -1],
        pos: [0.5, 0]
      }, {
        id: 'bottom',
        orientation: [0, 1],
        pos: [0.5, 0]
      }]
    },
    {
      id: '4',
      group: 'group1',
      label: '字符串处理',
      className: 'icon-background-color',
      iconType: 'icon-shujuji',
      Class: Node,
      endpoints: [{
        id: 'top',
        orientation: [0, -1],
        pos: [0.5, 0]
      }]
    },
    {
      id: '5',
      group: 'group1',
      label: '字符串处理',
      className: 'icon-background-color',
      iconType: 'icon-shujuji',
      Class: Node,
      endpoints: [{
        id: 'top',
        orientation: [0, -1],
        pos: [0.5, 0]
      }]
    }
  ],
  edges: [
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '1',
      targetNode: '7',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '2',
      targetNode: '7',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '3',
      targetNode: '8',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '3',
      targetNode: '9',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.2,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '4',
      targetNode: '8',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.2,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '4',
      targetNode: '9',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '1',
      targetNode: '3',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.2,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '2',
      targetNode: '3',
      arrow: true,
      lineType: 'dash-line',
      type: 'endpoint',
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '3',
      targetNode: '4',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '3',
      targetNode: '5',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
      Class: Edge
    }
  ],
  groups: [{
    id: 'group1',
    options: {
      title: '测试'
    },
    draggable:true,
    width: 300,
    height: 200,
    resize: true
  }]
};

const groupsData = {
  nodes: [
    {
      id: '1',
      group: 'group1',
      label: '时间处理',
      className: 'icon-background-color',
      iconType: 'icon-shijian',
      Class: Node,
      endpoints: [{
        id: 'bottom',
        orientation: [0, 1],
        pos: [0.5, 0]
      }]
    },
    {
      id: '2',
      group: 'group1',
      label: '算数运算',
      className: 'icon-background-color',
      iconType: 'icon-webicon310',
      Class: Node,
      endpoints: [{
        id: 'bottom',
        orientation: [0, 1],
        pos: [0.5, 0]
      }]
    },
    {
      id: '3',
      label: '交运算',
      className: 'icon-background-color',
      iconType: 'icon-guanlian',
      Class: Node,
      endpoints: [{
        id: 'top',
        orientation: [0, -1],
        pos: [0.5, 0]
      }, {
        id: 'bottom',
        orientation: [0, 1],
        pos: [0.5, 0]
      }]
    },
    {
      id: '4',
      group: 'group2',
      label: '字符串处理',
      className: 'icon-background-color',
      iconType: 'icon-shujuji',
      Class: Node,
      endpoints: [{
        id: 'top',
        orientation: [0, -1],
        pos: [0.5, 0]
      }]
    },
    {
      id: '5',
      group: 'group2',
      label: '字符串处理',
      className: 'icon-background-color',
      iconType: 'icon-shujuji',
      Class: Node,
      endpoints: [{
        id: 'top',
        orientation: [0, -1],
        pos: [0.5, 0]
      }]
    }
  ],
  edges: [
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '1',
      targetNode: '7',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '2',
      targetNode: '7',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '3',
      targetNode: '8',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '3',
      targetNode: '9',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.2,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '4',
      targetNode: '8',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.2,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '4',
      targetNode: '9',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '1',
      targetNode: '3',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.2,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '2',
      targetNode: '3',
      arrow: true,
      lineType: 'dash-line',
      type: 'endpoint',
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '3',
      targetNode: '4',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '3',
      targetNode: '5',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
      Class: Edge
    }
  ],
  groups: [{
    id: 'group1',
    options: {
      title: '测试'
    },
    draggable:true,
    width: 300,
    height: 200,
    resize: true
  }, {
    id: 'group2',
    options: {
      title: '测试'
    },
    draggable:true,
    width: 300,
    height: 200,
    resize: true
  }]
}

const unGroupData = {
  nodes: [
    {
      id: '1',
      label: '时间处理',
      className: 'icon-background-color',
      iconType: 'icon-shijian',
      Class: Node,
      endpoints: [{
        id: 'bottom',
        orientation: [0, 1],
        pos: [0.5, 0]
      }]
    },
    {
      id: '2',
      label: '算数运算',
      className: 'icon-background-color',
      iconType: 'icon-webicon310',
      Class: Node,
      endpoints: [{
        id: 'bottom',
        orientation: [0, 1],
        pos: [0.5, 0]
      }]
    },
    {
      id: '3',
      label: '交运算',
      className: 'icon-background-color',
      iconType: 'icon-guanlian',
      Class: Node,
      endpoints: [{
        id: 'top',
        orientation: [0, -1],
        pos: [0.5, 0]
      }, {
        id: 'bottom',
        orientation: [0, 1],
        pos: [0.5, 0]
      }]
    },
    {
      id: '4',
      label: '字符串处理',
      className: 'icon-background-color',
      iconType: 'icon-shujuji',
      Class: Node,
      endpoints: [{
        id: 'top',
        orientation: [0, -1],
        pos: [0.5, 0]
      }]
    },
    {
      id: '5',
      label: '字符串处理',
      className: 'icon-background-color',
      iconType: 'icon-shujuji',
      Class: Node,
      endpoints: [{
        id: 'top',
        orientation: [0, -1],
        pos: [0.5, 0]
      }]
    }
  ],
  edges: [
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '1',
      targetNode: '7',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '2',
      targetNode: '7',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '3',
      targetNode: '8',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '3',
      targetNode: '9',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.2,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '4',
      targetNode: '8',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.2,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '4',
      targetNode: '9',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '1',
      targetNode: '3',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.2,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '2',
      targetNode: '3',
      arrow: true,
      lineType: 'dash-line',
      type: 'endpoint',
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '3',
      targetNode: '4',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
      Class: Edge
    },
    {
      source: 'bottom',
      target: 'top',
      sourceNode: '3',
      targetNode: '5',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
      Class: Edge
    }
  ]
};

module.exports = unGroupData;
