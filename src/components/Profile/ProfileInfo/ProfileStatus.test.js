import { create } from "react-test-renderer"
import ProfileStatus from "./ProfileStatus"

describe('ProfileStatusC', () => {
    test('correct status from props', () => {
        const component = create(<ProfileStatus status="free" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("free");
    })

    test('span rendered', () => {
        const component = create(<ProfileStatus status="free" />);
        const root = component.root;
        const span = root.findByType('span');
        expect(span).not.toBeNull();
    })

    test('span inner text', () => {
        const component = create(<ProfileStatus status="free" />);
        const root = component.root;
        const span = root.findByType('span');
        expect(span.children[0]).toBe("free");
    })

    test("input was not rendered", () => {
        const component = create(<ProfileStatus status="free" />);
        const root = component.root;
        expect(() => {
            root.findByType('input');
        }).toThrow()
    })

    test("input instead of span on dbclick", () => {
        const component = create(<ProfileStatus status="free" />);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onDoubleClick();
        const input = root.findByType('input');
        expect(input.props.value).toBe("free");
    })

    /*test("calling callback", () => {
        const myCB = jest.fn();
        const component = create(<ProfileStatus status="free" setStatusThunk={myCB}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(myCB.mock.calls.length).toBe(1);
    })*/

})