import {useEffect, useState} from "react";

const useViewport = () => {
    const [view, setView] = useState('desktop');

    useEffect(() => {
        const updateView = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setView('mobile');
            } else if (width < 1024) {
                setView('tablet');
            } else {
                setView('desktop');
            }
        };

        updateView(); // Первоначальная проверка при монтировании компонента

        window.addEventListener('resize', updateView);
        return () => window.removeEventListener('resize', updateView);
    }, []);

    return view;
};

export default useViewport;