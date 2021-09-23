/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen, fireEvent } from '@testing-library/react';
 import Button from './index';
 import { IoMoonOutline } from 'react-icons/io5';

 describe("Button tests", () => {
     it('Should be show a button', () => {
         render(<Button></Button>);

         const btn = screen.getByRole('button');

         expect(btn).toBeInTheDocument();
     });
     it('Should be show a text inside of button', () => {
        render(<Button>Confirmar</Button>);

        const btn = screen.getByTestId('btn');

        expect(btn).toHaveTextContent('Confirmar');
     });
     it('should show if button have a icon', () => {
         render(<Button startIcon={<IoMoonOutline />}>Confirmar</Button>);

         const icon = screen.getByTestId('btn').querySelector('svg');
         
         expect(icon).toBeInTheDocument();
     });
     it('should click the button and return the clicked message', () => {
        render(<Button onClick={e => {
            e.target.innerHTML = 'btn clicked!';
        }}></Button>);

        const btn = screen.getByTestId('btn');

        fireEvent.click(btn);
        
        expect(btn).toHaveTextContent('btn clicked!');
     })
 })