import { ref } from "vue"

export const authStatus = ref(!!localStorage.getItem('token'))

export function isAuthenticated() {
  return authStatus.value
}

export function login() {
  localStorage.setItem('token', 'dummy')
  authStatus.value = true
}

export function logout() {
  localStorage.removeItem('token')
  authStatus.value = false
}