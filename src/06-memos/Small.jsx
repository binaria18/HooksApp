import React, { memo } from 'react';

// This component is memoized to prevent unnecessary re-renders
// It will only re-render if the `value` prop changes
export const Small = memo( ( { value }) => {
    console.log('Me volví a dibujar :(');

    return (
        <small>{ value }</small>
    )

} )