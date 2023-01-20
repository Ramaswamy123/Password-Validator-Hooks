import {useState} from 'react'

import {
  AppContainer,
  PasswordContainer,
  PasswordHeading,
  Paragraph,
  PasswordBox,
  Condition,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  // const [alert,setAlert] = useState(false)

  const onChangeInput = event => {
    setPassword(event.target.value)
  }
  const value =
    password.length >= 8 ? '' : 'your password must be at least 8 characters'

  return (
    <AppContainer>
      <PasswordContainer>
        <PasswordHeading>Password Validator</PasswordHeading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <PasswordBox type="password" onChange={onChangeInput} />
        <Condition>{value}</Condition>
      </PasswordContainer>
    </AppContainer>
  )
}
export default PasswordValidator
