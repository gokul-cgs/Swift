export const userData = () =>{
  let data = localStorage.getItem('swiftUserData')
  return !!data ? JSON.parse(data) : null
}