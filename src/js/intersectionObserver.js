import { fetchHits } from '../index.js'
import refs from './refs.js'


const intersectionObserver = () => {
    const options = {
        threshold: 0.01,
    };
  
    const onEntry = (entries) => {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                fetchHits();
            }
        });
    };

    const observer = new IntersectionObserver(onEntry, options);
    observer.observe(refs.io);
}

export default intersectionObserver;