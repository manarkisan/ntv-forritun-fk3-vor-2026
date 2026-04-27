import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { Greeting } from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting", () => {
  it("greets user", async () => {
    const user = userEvent.setup();
    render(<Greeting />);
    const inputField = screen.getByPlaceholderText("Skrifaðu nafn") as HTMLInputElement;
    fireEvent.change(inputField, { target: {value: "test"}})
    await user.click(screen.getByRole('button', {name: "Senda"}));
    expect(inputField.value).toBe("test")
    expect(screen.getByText("Halló, test!")).toBeInTheDocument()
  });
});
