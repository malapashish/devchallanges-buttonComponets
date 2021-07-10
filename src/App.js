import React from 'react'

import Button from './Components/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const App = () => {
    return (
        <div className = 'buttons-section' >
            <h1 className = 'buttons-section-heading' >Buttons</h1>
            <div className = 'buttons-subsection'>
                <div className = 'buttons-subsection-element'>
                    <p className = 'button-subsection-button-type-heading'>{'<Button />'}</p>
                    <Button />
                </div>
                <div className = 'buttons-subsection-element'>
                    <p className = 'buttons-subsection-button-options'>{'&:hover, &:focus'}</p>
                    <Button hover />
                </div>
            </div>
            <div className = 'buttons-subsection'>
                <div className = 'buttons-subsection-element'>
                    <p className = 'button-subsection-button-type-heading'>{`<Button variant="outline" />`}</p>
                    <Button variant = "outline" />
                </div>
                <div className = 'buttons-subsection-element'>
                    <p className = 'buttons-subsection-button-options'>{'&:hover, &:focus'}</p>
                    <Button variant = "outline" hover />
                </div>
            </div>
            <div className = 'buttons-subsection'>
                <div className = 'buttons-subsection-element'>
                    <p className = 'button-subsection-button-type-heading'>{`<Button variant="outline" />`}</p>
                    <Button variant="text" />
                </div>
                <div className = 'buttons-subsection-element'>
                    <p className = 'buttons-subsection-button-options'>{'&:hover, &:focus'}</p>
                    <Button variant = "text" hover />
                </div>
            </div>
            <div className = 'buttons-subsection'>
                <div className = 'buttons-subsection-element'>
                    <p className = 'button-subsection-button-type-heading'>{`<Button disableShadow />`}</p>
                    <Button disableShadow />
                </div>
            </div>
            <div className = 'buttons-subsection'>
                <div className = 'buttons-subsection-element'>
                    <p className = 'button-subsection-button-type-heading'>{`<Button disabled />`}</p>
                    <Button disabled />
                </div>
                <div className = 'buttons-subsection-element'> 
                    <p className = 'button-subsection-button-type-heading'>{`<Button variant = "text" disabled />`}</p>
                    <Button variant = "text" disabled />
                </div>
            </div>
            <div className = 'buttons-subsection'>
                <div className = 'buttons-subsection-element'>
                    <p className = 'button-subsection-button-type-heading'>{`<Button startIcon = "local_grocery_store" />`}</p>
                    <Button startIcon = {<AddShoppingCartIcon />} />
                </div>
                <div className = 'buttons-subsection-element'>
                    <p className = 'button-subsection-button-type-heading'>{`<Button endIcon = "local_grocery_store" />`}</p>
                    <Button endIcon = {<AddShoppingCartIcon />} />
                </div>
            </div>
            <div className = 'buttons-subsection'>
                <div className = 'buttons-subsection-element'>
                    <p className = 'button-subsection-button-type-heading'>{`<Button size = "sm" />`}</p>
                    <Button size = "sm" />
                </div>
                <div className = 'buttons-subsection-element'>
                    <p className = 'button-subsection-button-type-heading'>{`<Button size = "md" />`}</p>
                    <Button size = "md" />
                </div>
                <div className = 'buttons-subsection-element'>
                    <p className = 'button-subsection-button-type-heading'>{`<Button size = "lg" />`}</p>
                    <Button size = "lg" />
                </div>
            </div>
            <div className = 'buttons-subsection'>
                <div className = 'buttons-subsection-element'>
                    <p className = 'button-subsection-button-type-heading'>{`<Button color = "default" />`}</p>
                    <Button color = "default" />
                </div>
                <div className = 'buttons-subsection-element'>
                    <p className = 'button-subsection-button-type-heading'>{`<Button color = "primary" />`}</p>
                    <Button color = "primary" />
                </div>
                <div className = 'buttons-subsection-element'>
                    <p className = 'button-subsection-button-type-heading'>{`<Button color = "secondary" />`}</p>
                    <Button color = "secondary" />
                </div>
                <div className = 'buttons-subsection-element'>
                    <p className = 'button-subsection-button-type-heading'>{`<Button color = "danger" />`}</p>
                    <Button color = "danger" />
                </div>
            </div>
            <div className = 'buttons-subsection'>
                <div className = 'buttons-subsection-element'>
                    <p className = 'buttons-subsection-button-options'>{'&:hover, &:focus'}</p>
                    <Button color = "default" hover />
                </div>
                <div className = 'buttons-subsection-element'> 
                    <Button color = "primary" hover />
                </div>
                <div className = 'buttons-subsection-element'> 
                    <Button color = "secondary" hover />
                </div>
                <div className = 'buttons-subsection-element'> 
                    <Button color = "danger" hover />
                </div>
            </div>
        </div>
    )
}
 
export default App

