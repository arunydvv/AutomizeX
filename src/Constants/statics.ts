
export const clients = [...new Array(10)].map((client, index) => ({
    href: `/${index + 1}.png`,
}))


export const EditorCanvasDefaultCardTypes = {
    Email: { description: 'Send and email to a user', type: 'Action' },
    Condition: {
        description: 'Boolean operator that creates different conditions lanes.',
        type: 'Action',
    },
    AI: {
        description:
            'Use the power of AI to summarize, respond, create and much more.',
        type: 'Action',
    },
    Slack: { description: 'Send a notification to slack', type: 'Action' },
    'Google Drive': {
        description:
            'Connect with Google drive to trigger actions or to create files and folders.',
        type: 'Trigger',
    },
    Notion: { description: 'Create entries directly in notion.', type: 'Action' },
    'Custom Webhook': {
        description:
            'Connect any app that has an API key and send data to your applicaiton.',
        type: 'Action',
    },
    Discord: {
        description: 'Post messages to your discord server',
        type: 'Action',
    },
    'Google Calendar': {
        description: 'Create a calendar invite.',
        type: 'Action',
    },
    Trigger: {
        description: 'An event that starts the workflow.',
        type: 'Trigger',
    },
    Action: {
        description: 'An event that happens after the workflow begins',
        type: 'Action',
    },
    Wait: {
        description: 'Delay the next action step by using the wait timer.',
        type: 'Action',
    },
}


export const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];