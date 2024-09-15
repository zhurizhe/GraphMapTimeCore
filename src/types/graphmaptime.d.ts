// src/types/graphmaptime.d.ts

declare module 'graphmaptime' {
    export interface Node {
      id: string;
      label: string;
      // 其他节点属性
    }
  
    export interface Edge {
      from: string;
      to: string;
      // 其他边属性
    }
  
    export interface GraphOptions {
      // 图谱布局选项
      layout?: string;
      // 其他图谱选项
    }
  
    export class Graph {
      constructor(options: GraphOptions);
  
      addNode(node: Node): void;
      addEdge(edge: Edge): void;
      // 其他图谱方法
    }
  
    // 可以根据需要扩展更多接口和类型
  }
  