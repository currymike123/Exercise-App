/* User session information */

const Session = {
  user: null,
  message: [],
};

export default Session;

export function Login() {
  Session.user = {};
}

export function Logout() {
  Session.user = null;
}
