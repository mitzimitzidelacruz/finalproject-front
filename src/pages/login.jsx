import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import useAuth from "../auth/useAuth";
import Form from 'react-bootstrap/Form';

const userCredentials = {id: 1, name: 'Omar', email: 'martindelaC@gmail.com', role: 'admin'};

function Login() {

    const location = useLocation();

    const { t } = useTranslation();

    const { login } = useAuth();

    return (
        <div className='page'>
            <h1>{t("welcomeLogin")}</h1>
            
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <button type="submit" onClick={() => login(userCredentials, location.state?.from)}>{t("login")}</button>


          </Form>

             
        </div> 
    )

}

export default Login;
