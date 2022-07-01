import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import TasksQuery from 'graphql/task/TasksQuery';
import {waitFor, render, cleanup} from "@testing-library/react";
import {GraphQLError} from "graphql";
import Task from "../index"

afterEach(cleanup);

const taskMock = [
    {
        request: {
            query: TasksQuery,
        },
        result: {
            data: {
                allTasks: [
                    {
                        id: '619e44bcd36de6c62c775386',
                        subject: 'Front',
                        project: 'Task Manager',
                        description: 'blablabla',
                        deadline: '24/12/21',
                        status: 'to do',
                        priority: 'high',
                        user: 'sofiane',
                        author: 'quentin',
                        initial_time_estimation: '',
                        initial_time_spent: '',
                        advancement: ''
                    },
                ],
            },
        },
    },
];


describe('fetch all task in TaskTable', () => {
    it('verify if its loading', async () => {

        const {getAllByRole, getByRole} = render(
            <MockedProvider mocks={taskMock} addTypename={false}>
                <Task />
            </MockedProvider>
        );

        const progressBar = getAllByRole('progressbar' , {hidden: true});
        expect(progressBar[0]).toBeInTheDocument();


    });

    it('test if all tasks are displayed', async () => {

        const {getByText} = render(
            <MockedProvider mocks={taskMock} addTypename={false}>
                <Task />
            </MockedProvider>,
        );

        const element = await waitFor(() => getByText('Front'));
        expect(element).toBeInTheDocument();
    });

    it('verify if there is an error', async () => {
        const {getByText} = render(
            <MockedProvider
                mocks={[
                    {
                        request: {
                            query: TasksQuery,
                        },
                        result: {
                            errors: [new GraphQLError('Error!')],
                        },
                    },
                ]}
                addTypename={false}
            >
                <Task />
            </MockedProvider>
        );

        const element = await waitFor(() => getByText(/Error/i));
        expect(element).toBeInTheDocument();
    });
});
