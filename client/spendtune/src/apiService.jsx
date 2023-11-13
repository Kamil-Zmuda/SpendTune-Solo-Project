const baseUrl = 'http://localhost:3001';

async function getLoggedUser() {
  try {
    const loggedUser = await fetch(baseUrl + '/logged_user')
    const response = await loggedUser.json();
    return response;
  } catch(error) {
    console.log('Issue occured while retrieving logged user: ' + error);
  }
}

async function logUser({ email, password }) {
  try {
    const userData = await fetch(baseUrl + '/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password})
    })
    const user = await userData.json();
    return user;
  } catch (error) {
    console.log('Issue occured on login: ' + error)
  }
}

async function register(user) {
  try {
    const userData = await fetch(baseUrl + '/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    const registeredUser = await userData.json();
    return registeredUser;
  } catch (error) {
    console.log('Issue occured on register: ' + error)
  }
}

async function logout() {
  try {
    await fetch(baseUrl + '/logout', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      }
    })
  } catch(error) {
    console.log('Issue occured on logout: ' + error)
  }
}

async function addCategory(category) {
  try {
    const categoryData = await fetch(baseUrl + '/add_category', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(category)
    })
    const updatedUser = await categoryData.json();
    return updatedUser;
  } catch {
    console.log('Issue occured on add category.')
  }
}

async function assignCategory(category, id) {
  try {
    const categoryData = await fetch(baseUrl + '/assign_category', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({category, id})
    })
    const updatedUser = await categoryData.json();
    return updatedUser;
  } catch {
    console.log('Issue occured on assign category.')

  }
}

export { logUser, register, getLoggedUser, logout, addCategory, assignCategory }