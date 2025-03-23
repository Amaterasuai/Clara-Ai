import React from 'react';
import { ToolItem } from '../AppCreator';
import ToolSidebar from './ToolSidebar';

interface ToolsSidebarProps {
  toolItems: ToolItem[];
  isDark: boolean;
  selectedTool: ToolItem | null;
  onDragStart: (event: React.DragEvent<HTMLDivElement>, tool: ToolItem) => void;
  onDragEnd: () => void;
}

const ToolsSidebar: React.FC<ToolsSidebarProps> = ({
  toolItems,
  onDragStart,
}) => {
  return (
    <ToolSidebar 
      tools={toolItems} 
      onDragStart={onDragStart} 
    />
  );
};

export default ToolsSidebar;
