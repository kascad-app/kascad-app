import { Button } from "@kascad-app/ui-kit";
import { Input } from "@kascad-app/ui-kit";
import Image from "next/image"
import icon from "./icons/union.svg"

export default function Home() {
	return (
		<div>
			<p>Boutons</p>
			<div>
				<Button variant="primary">Click me</Button> 
				<Button variant="primary" state="disabled">Click me</Button>
			</div>
			<div>
				<Button variant="secondary">Click me</Button>
				<Button variant="secondary" state="disabled">Click me</Button>
			</div>
			<div>
				<Button variant="tertiary">Click me</Button>
				<Button variant="tertiary" state="disabled">Click me</Button>
			</div>
			<div>
				<Button variant="dark">Click me</Button>
				<Button variant="dark" state="disabled">Click me</Button>
			</div>
			<div>
				<Button variant="danger">Click me</Button>
				<Button variant="danger" state="disabled">Click me</Button>
			</div>
			<div>
				<Button variant="warning">Click me</Button>
				<Button variant="warning" state="disabled">Click me</Button>
			</div>
			<div>
				<p>Inputs</p>
			</div>
			<div>
				<Input placeholder="Email address" state="default"/>
				<Input
					placeholder="Email address"
					state="default"
					iconLeft
					icon={<Image src={icon} alt="icone"/>}
					message="Message"
				/>
				<Input
					placeholder="Email address"
					state="disabled"
					iconLeft
					icon={<Image src={icon} alt="icone"/>}
				/>


			
			</div>
		</div>
	);
}
