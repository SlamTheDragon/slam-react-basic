/**
 * This component requires Redux to work.
 * Here is the overview on how this component works:
 * 
 * [ UPON LOAD ]
 * - if (!props.isOpen) return null;
 * Modal wont be displayed unless isOpen turns to be true.
 * - function onInteract()...
 * Modal will finish loading its final state whenever the user starts interacting to it. 
 * This, to prevent locking all elements from being accessible. See modalSlice.ts
 * 
 * TODO: modal-action customizability based on ID upon payload send to get custom sets of action buttons
*/

import { useDispatch } from 'react-redux';
import React from 'react';
import Button from './Button';

interface ModalProps {
    modalTitle: string
    isOpen: boolean
    children?: React.ReactNode
    onClose: () => void
}

/**
 * @todo
 * 
 * Recyclable Modal for React.
 * These are the required interfaces:
 * @param {modalTitle} props.modalTitle - string title
 * @param {isOpen} props.isOpen - boolean, checks if the modal is open
 * @param {onClose} props.onClose - void function, closes the modal
 * 
 * @returns Modal
*/
export default function Modal(props: ModalProps) {
    
    const dispatch = useDispatch()
    
    if (!props.isOpen) return null;

    function onInteract() {
        document.body.classList.remove('disable-events');
        dispatch({
            type: 'modalHeader/setHeader',
            payload: 'Hardcoded Modal Title Via Payload'
        })
    };

    return (
        <div className="modal" onMouseEnter={onInteract}>
            
            <div className="modal-wrapper card">
                <div className='modal-header'>
                    <h3>{props.modalTitle}</h3>
                    <Button onClick={props.onClose}>✖</Button>
                </div>
                <div className='modal-container'>
                    {props.children}
                </div>
                <div className='modal-action'>
                    <Button>Placeholder</Button>
                </div>
            </div>

            <div className="modal-background" onClick={props.onClose} />
        </div>
    );
};