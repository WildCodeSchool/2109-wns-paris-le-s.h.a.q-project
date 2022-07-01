import {MockedProvider} from "@apollo/client/testing";
import {render} from "@testing-library/react";
import deleteTaskMutation from "../../../../../graphql/task/DeleteTaskMutation";
import EnhancedTableToolbar from "../EnhancedTableToolbar";


it('should render without error', () => {
    const deleteTask = { id: '1A', subject: "test" }
    const mocks = [
        {
            request: {
                query: deleteTaskMutation,
                variables: { idToDelete: '1A' }
            },
            result: { data: deleteTask }
        }
    ]

   render(
        <MockedProvider mocks={mocks}>
            <EnhancedTableToolbar numSelected={0} elementId={['']} refetch={() => {}} setSelected={() => {}} />
        </MockedProvider>,
    );

});