import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Home from "../src/pages/index"

beforeEach(() => {
    render(<Home />)
})


describe("check slogans", () => {
    test("main slogan", () => {
        const text = /^Create Beautiful Coversfor blogs like a pro😎/
        expect(screen.getByTestId('main-slogan')).toHaveTextContent(text);
    })

    test("descriptive slogan", () => {

        const text = /^We at Cover Builders are aimed to provide you simple and easy tools,that helps you in generating blog covers easily/
        expect(screen.getByTestId("descriptive-slogan")).toHaveTextContent();
    })
})