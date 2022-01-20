import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Scores from './index'
import ScoresHeader from '../ScoresHeader'

let testProps = {
    handleRenderScores: jest.fn(),
    renderScores: false,
}

describe("Scores Tests", ()=>{
    it("should render scores data and the ScoresHeader", ()=>{
        render(<Scores {...testProps}/>)
        let scoresHeader = screen.getByText("Your Scores")
        expect(scoresHeader).toBeInTheDocument()
    })
    it("should render scores data and the ScoresTable", ()=>{
        render(<Scores {...testProps}/>)
        let scoresTable = screen.getByText("Topic")
        expect(scoresTable).toBeInTheDocument()
    })
})