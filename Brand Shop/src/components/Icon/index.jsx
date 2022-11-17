import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Quotes
} from './icons';

const icons = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    linkedin: Linkedin,
    quotes: Quotes,
};

const Icon = ({name, ...props}) => {
    const IconComponent = icons[name];

    return (
        <IconComponent {...props} />
    );
};

export default Icon;
