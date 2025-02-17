import Button from '../Button/Button';
import './header.css';
import { useTelegram } from '../../hooks/useTelegram';

const Header = () => {
    const { user, onClose } = useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>{user}</span>
        </div>
    );
};

export default Header;
