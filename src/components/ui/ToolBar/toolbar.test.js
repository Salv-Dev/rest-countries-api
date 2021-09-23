/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react';
import ToolBar from './index';

describe('Toolbar tests', () => {
    it('should be show a title', () => {
        render(<ToolBar title="Titulo"></ToolBar>);
        const title = screen.queryByText("Titulo");
        expect(title).toBeInTheDocument();
    });
    it('dont should be show a title', () => {
        render(<ToolBar />);
        const title = screen.queryByText("Titulo");
        expect(title).not.toBeInTheDocument();
    });
    it('should be show a child elements', () => {
        render(<ToolBar><p>Teste</p></ToolBar>);
        const child = screen.queryByText("Teste");
        expect(child).toBeInTheDocument();
    });
    it('dont should be show a child elements', () => {
        render(<ToolBar></ToolBar>);
        const child = screen.queryByText("Teste");
        expect(child).not.toBeInTheDocument();
    });
})