// Slider
interface IPropSlider {
    slides: any[];
}

interface IStateSlider {
    activeSlide: number;
    interval: number;
    autoplay: boolean;
}

// Slide
interface IPropSlide {
    background: string;
    active: boolean;
    text: string;
}
