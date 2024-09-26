import React, { useEffect, useRef, useState } from 'react';

interface Position {
    x: number;
    y: number;
}

const ZoomImage: React.FC = () => {
    // State for image scale
    const [scale, setScale] = useState<number>(1);

    // State for image position
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

    // Reference to the image element
    const imageRef = useRef<HTMLImageElement | null>(null);

    const handleZoomIn = () => {
        setScale((prevScale) => prevScale + 0.1);
    };

    const handleZoomOut = () => {
        setScale((prevScale) => Math.max(0.1, prevScale - 0.1)); // Prevents scale from going below 0.1
    };

    // Effect for handling drag functionality
    useEffect(() => {
        const image = imageRef.current;
        let isDragging = false;
        let prePosition: Position = { x: 0, y: 0 };

        const handleMouseDown = (e: MouseEvent) => {
            isDragging = true;
            prePosition = { x: e.clientX, y: e.clientY };
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) {
                return;
            }
            const deltaX = e.clientX - prePosition.x;
            const deltaY = e.clientY - prePosition.y;
            prePosition = { x: e.clientX, y: e.clientY };
            setPosition((prevPosition) => ({
                x: prevPosition.x + deltaX,
                y: prevPosition.y + deltaY,
            }));
        };

        const handleMouseUp = () => {
            isDragging = false;
        };

        // Add event listeners
        image?.addEventListener('mousedown', handleMouseDown);
        image?.addEventListener('mousemove', handleMouseMove);
        image?.addEventListener('mouseup', handleMouseUp);
        image?.addEventListener('mouseleave', handleMouseUp); // To stop dragging when the mouse leaves

        return () => {
            image?.removeEventListener('mousedown', handleMouseDown);
            image?.removeEventListener('mousemove', handleMouseMove);
            image?.removeEventListener('mouseup', handleMouseUp);
            image?.removeEventListener('mouseleave', handleMouseUp);
        };
    }, []);

    return (
        <div>
            <div className='btn-container'>
                <button onClick={handleZoomIn}>Zoom In</button>
                <button onClick={handleZoomOut}>Zoom Out</button>
            </div>

            <img
                ref={imageRef}
                src={'src/assets/test.jpg'}
                alt='Zoomable'
                style={{
                    transform: `scale(${scale})`,
                    position: 'absolute',
                    top: `${position.y}px`,
                    left: `${position.x}px`,
                    cursor: 'grab',
                    width: 'auto',     
                    height: '600px',    
                    maxWidth: '100%',  
                }}
            />
        </div>
    );
};

export default ZoomImage;
