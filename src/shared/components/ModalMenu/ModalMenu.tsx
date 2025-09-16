import styles from "./styles.module.scss";
import Link from "next/link";
import Modal from "react-modal";
import close from "./../../assets/images/close.svg";
import point from "./../../assets/images/point.svg";

const customStyles = {
  content: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
  },
};

const links = [
  { namePage: "Главная", linkPage: "/", id: 1 },
  { namePage: "Список услуг", linkPage: "/services", id: 2 },
  { namePage: "Цены", linkPage: "#", id: 3 },
  { namePage: "О компании", linkPage: "#", id: 4 },
];

interface IProps {
  modalIsOpen: boolean;
  setIsOpen: (modalIsOpen: boolean) => void;
}

const ModalMenu = ({ modalIsOpen, setIsOpen }: IProps) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          {links.map((listMenu) => (
            <Link
              key={listMenu.id}
              href={listMenu.linkPage}
              onClick={() => {
                setIsOpen(false);
              }}
              className={styles.title}
            >
              <img src={point.src} className={styles.pointImg} />
              {listMenu.namePage}
              <div className={styles.border}></div>
            </Link>
          ))}
        </div>
        <img
          src={close.src}
          className={styles.closeImg}
          onClick={() => {
            setIsOpen(false);
          }}
        />
      </div>
    </Modal>
  );
};

export default ModalMenu;
