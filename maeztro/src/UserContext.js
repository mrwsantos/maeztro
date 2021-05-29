import React from 'react';
import { USER_GET } from './Api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const timeoutRef = React.useRef;

  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function userLogout() {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem('userLoggedIn');
      navigate('/');
    },
    [navigate]
  );

  async function getUser(id) {
    const { url, options } = USER_GET(id);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
    // console.log('GET USER: ', json);
  }

  async function userLogin(user, pass) {
    try {
      setError(null);
      setLoading(true);

      const response = await fetch(
        `http://localhost:3004/users?username=${user}`
      );
      if (!response.ok) throw new Error(`Error: Campos inválidos!`);
      const json = await response.json();
      var checkName = json.map(({ username }) => username === user);
      var checkPass = json.map(({ password }) => password === pass);
      // console.log(checkName);
      // console.log(checkPass);

      //SE TIVER TUDO OK
      if (checkName[0] && checkPass[0]) {
        setData(json);
        // console.log(json);

        window.localStorage.setItem('userLoggedIn', [
          json[0].id,
          json[0].username,
          json[0].email,
          json[0].imgUser,
          json[0].type
        ]);
        await getUser(json[0].id);
        timeoutRef.current = setTimeout(() => setLogin(true), 1000);
      } else {
        setError('Dados inválidos!');
        timeoutRef.current = setTimeout(() => setError(null), 3000);
      }
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const loggedIn = window.localStorage.getItem('userLoggedIn');
      if (loggedIn) {
        var split = loggedIn.split(',');
        try {
          setError(null);
          setLoading(true);
          await getUser(split[0]);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, data, userLogout, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
