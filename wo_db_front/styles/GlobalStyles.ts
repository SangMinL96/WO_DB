import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  dl,ul,ol,menu,li {list-style:none}
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  
  box-sizing: border-box;
}
textarea:focus, input:focus{
      outline: none;
    }
  .react-confirm-alert-overlay{
    opacity: 1;
    animation: none;
    background: none;
    background: rgba(24, 24, 24, 0.226);
    
  }
  .react-confirm-alert-blur{
    filter: none;
  }
  .react-confirm-alert{
    width: 300px;
    height:160px;
 

  }
  .react-confirm-alert-body{
    display: flex;
    width: 100%;
    height:100%;
    border-radius: 2px;
    padding:30px 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    flex-direction: column;
    justify-content: space-between;
    h1{
      font-size: 16px;
      font-weight: 500;
      color: #262626;
    }
  }
  .react-confirm-alert-button-group{
    width: 100%;
    justify-content: flex-end;
    button{
      margin-bottom: -10px;
      margin-right: -10px;
      background-color: rgba(255, 255, 255, 0);
      padding: 8px 15px;
      color:#fd4381;
      font-size: 14px;
      &:active{
        background-color: rgba(146, 146, 146, 0.122);
      }
    }
  }

`;
export default GlobalStyles;
