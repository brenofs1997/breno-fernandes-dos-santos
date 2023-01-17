import styled from 'styled-components';

export const Overlay = styled.div`
  left: 0px;
  top: 0px;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  header{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    button {
      line-height: normal;
      border: 0;
      background: transparent;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap:24px;

    .input-details {
      font-weight: 500;
      font-size: 14px;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      gap: 8px;

      input {
        color: #333;
        font-size: 1.2rem;
      }
    }

    .primary {
        background: #333333;
        border-radius: 48px;
        border: 0;
        color: #fff;
        padding: 12px 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap:8px;
      }
  }
`;
