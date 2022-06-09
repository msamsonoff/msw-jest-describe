import '@testing-library/jest-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

describe('one', () => {
    const server = setupServer(
        rest.get('index.json', (req, res, ctx) =>
            (res(ctx.json(
                {
                    "value": "one"
                }
            )))
        ),
    )
    beforeAll(() => {
        server.listen()
    })
    afterEach(() => {
        server.resetHandlers()
    })
    afterAll(() => {
        server.close()
    })

    it('works', async () => {
        const response = await fetch('index.json')
        const json = await response.json()
        expect(json).toMatchObject(
            {
                "value": "one"
            }
        )
    })
})

describe('two', () => {
    const server = setupServer(
        rest.get('index.json', (req, res, ctx) =>
            (res(ctx.json(
                {
                    "value": "two"
                }
            )))
        ),
    )
    beforeAll(() => {
        server.listen()
    })
    afterEach(() => {
        server.resetHandlers()
    })
    afterAll(() => {
        server.close()
    })

    it('works', async () => {
        const response = await fetch('index.json')
        const json = await response.json()
        expect(json).toMatchObject(
            {
                "value": "two"
            }
        )
    })
})
