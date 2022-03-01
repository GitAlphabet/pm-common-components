import React from 'react';
import { render, screen } from '@testing-library/react';
import ActionList from './index';



describe('test first eg', () => {
  it('render eg', () => {
    const list = [<a>编辑</a>, <a>删除</a>];
    render(<ActionList actions={list} />);
    const el = screen.getByText('编辑');
   
    expect(el).toBeTruthy();
    expect(el).toBeInTheDocument();
    el.click();
    // expect(el.onClick).toHaveBeenCalled();
  });
});
