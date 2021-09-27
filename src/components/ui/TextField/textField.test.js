/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, fireEvent } from '@testing-library/react';
 import TextField from './index';

 const selectOptions = [
    "Africa",
    "América",
    "Asia",
    "Europa",
    "Oceania"
  ]

 const setup = (props) => {
     const field = render(<TextField {...props} />);
     const input = field.getByTestId('textField').querySelector('input');
     return {
         input,
         field
     }
 }

 describe('TextField tests', () => {
    it('should be show a TextField component', () => {
        const { field } = setup();
        expect(field.getByTestId('textField')).toBeInTheDocument();
    });

    it('should show a text field of type text', () => {
        const { input } = setup();
        fireEvent.change(input, {target: {value: 'testando...'}});
        expect(input.value).toBe('testando...');
    });

    it('should remove the text inside the input when clicked on the X button', () => {
        const { input, field } = setup({ cleanerButton: true, value: 'teste...', onChange: () => {}, onClean: () =>  input.value = ''});
        const btn = field.getByTestId('btn');
        fireEvent.click(btn);
        expect(input.value).toBe('');
    });

    it('should show a selection field', () => {
        const { field } = setup({ select: true, placeholder: "descrição..." });
        const p = field.getByText('descrição...');
        expect(p.innerHTML).toEqual('descrição...');
    });

    it('should show selection options menu when clicked', () => {
        const { field } = setup({ select: true, selectOptions: selectOptions, label: "select"});
        const select = field.getByLabelText('select');
        fireEvent.click(select);
        const menu = field.getByRole('list');
        expect(menu).toBeInTheDocument();
        const options = menu.getElementsByTagName('li');
        [...options].map((el, index) => {
            expect(el.innerHTML).toEqual(selectOptions[index])
        })
    });

    it('should show empty text within the menu when no selection options are available.', () => {
        const { field } = setup({ select: true, label: "select"});
        const select = field.getByLabelText('select');
        fireEvent.click(select);
        const menu = field.getByRole('list');
        expect(menu).toBeInTheDocument();
        const options = menu.getElementsByTagName('li');
        expect(options.length).toBe(1);
        expect(options[0].innerHTML).toBe('Vazio');
    });

    it('should close the menu if clicked in the selection field', () => {
        const { field } = setup({ select: true, selectOptions: selectOptions, label: "select"});
        const select = field.getByLabelText('select');
        fireEvent.click(select);
        const menu = field.getByRole('list');
        expect(menu).toBeInTheDocument();
        fireEvent.click(select);
        expect(menu).not.toBeInTheDocument();
    });

    it('should be select the option clicked and close the menu', () => {
        const { field } = setup({ select: true, selectOptions: selectOptions, label: "select", placeholder: "descrição..." });
        const p = field.getByText('descrição...');
        expect(p.innerHTML).toEqual('descrição...');

        const select = field.getByLabelText('select');
        fireEvent.click(select);
        const menu = field.getByRole('list');
        expect(menu).toBeInTheDocument();
        const options = menu.getElementsByTagName('li');
        [...options].map((el, index) => {
            expect(el.innerHTML).toEqual(selectOptions[index]);
            el.addEventListener('click', e => p.innerHTML = e.target.innerHTML);
            fireEvent.click(options[index]);
            expect(p.innerHTML).toBe(options[index].innerHTML);
            fireEvent.click(select);
            expect(menu).not.toBeInTheDocument();
        });
    })
 });