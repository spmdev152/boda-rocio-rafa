import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-wedding-dark text-white py-12 px-4 text-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <h2 className="font-serif text-3xl mb-4 tracking-wider">Rafa & Rocío</h2>
                <div className="flex items-center gap-2 text-white/50 mb-8 text-sm font-light">
                    <span>Hecho con</span>
                    <Heart size={14} className="fill-current" />
                    <span>para nuestro gran día</span>
                </div>
                <div className="w-full h-px bg-white/10 mb-8"></div>
                <p className="text-white/40 text-xs tracking-widest uppercase">
                    www.rafayrocio.com
                </p>
            </div>
        </footer>
    );
};

export default Footer;