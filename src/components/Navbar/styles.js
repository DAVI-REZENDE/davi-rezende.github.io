import styled from 'styled-components'

// export const HeaderWrapper = styled.div`
//   display: sticky;
//   top: 0;
// `;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 30px;

  background-color: #202733;
  position: sticky;
  top: 0;
  z-index: 999;


  img {
    width: 250px;
  }

  @media (max-width: 425px) {
    img {
      width: 150px;
    }
  }
`;

export const ModalMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #202733;
  z-index: 9999;

  display: ${({active}) => active ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  a {
    color: #fff;
    font-weight: 600;
    text-decoration: none;
  }
`;

export const Menu = styled.ul`
  width: 50%;
  z-index: 10000;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }

  a.menu-item-desktop {
    color: #fff;
    text-decoration: none;
  }

  .row {
    display: none;
  }

  .menu-button {
    display: none;
  }

  @media (max-width: 768px) {
    justify-content: flex-end;

    a.menu-item-desktop {
      display: none;
    }

    .menu-item {
      display: none;
    }

    .menu-button {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 4px;
      background-color: transparent;
      border: 0;

      .row {
        display: block;
        width: 30px;
        height: 4px;
        background-color: #fff;
        border-radius: 8px;
        transition: all .5s ease-in-out;
      }
    }

  }
`;
