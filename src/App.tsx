import './App.css'
import Header from './components/header/header'
import StickyNavbar from './components/navbar/sticky-navbar'
import Main from './components/main/main'
import { useState } from "react"

function App() {
  const [isSkipQuiz, setIsSkipQuiz] = useState<boolean>(false)

  const onSkipQuizPress = () => {
    setIsSkipQuiz(true)

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    })
  }
  return (
    <>
      <Header onSkipQuizPress={onSkipQuizPress} />
      <StickyNavbar />
      <Main isSkipQuiz={isSkipQuiz}></Main>
    </>
  )
}

export default App
