import { Modal } from "antd";

interface CustomeModalProps {
 visible?: boolean;
 title?: React.ReactNode | string;
 onOk?: (e: React.MouseEvent<HTMLElement>) => void;
 onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
 modalBody?: any;
}

export default function CustomeModal({
    title,
    visible,
    onOk,
    onCancel,
    modalBody,
}: 
CustomeModalProps) {
    return (
        <Modal title={title} visible={visible} onOk={onOk} onCancel={onCancel}>
            {modalBody}
        </Modal>
    )
}
