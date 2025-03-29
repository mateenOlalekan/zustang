import React from 'react';
import { Github, Zap, FileText, Users, ClipboardList, Search, Tags } from 'lucide-react';

export const getCategoryIcon = (category) => {
  switch(category) {
    case 'Bug Fix': return <Github size={14} />;
    case 'Feature': return <Zap size={14} />;
    case 'Documentation': return <FileText size={14} />;
    case 'Meeting': return <Users size={14} />;
    case 'Administrative': return <ClipboardList size={14} />;
    case 'Research': return <Search size={14} />;
    default: return <Tags size={14} />;
  }
};