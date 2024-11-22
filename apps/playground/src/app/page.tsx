import { Button } from "@kascad-app/ui-kit";
import { Input } from "@kascad-app/ui-kit";
import Image from "next/image"
import icon from "./icons/union.svg"
import dropdown from "./icons/dropdown.svg"
import warning from "./icons/warning.svg"

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
        <Input placeholder="Sans icône" state="default" />
				<Input placeholder="Error" error state="default" message="Message" iconMsg={<Image src={warning} alt="error"/>}/>
        <Input
          placeholder="Avec icône"
          state="default"
          iconLeft
          iconLeftImage={<Image src={icon} alt="icone" />}
          message="Message"
        />
        <Input
          placeholder="Input désactivé"
          state="disabled"
          iconLeft
          iconLeftImage={<Image src={icon} alt="icone" />}
        />
				<Input placeholder="Error" error state="disabled" message="Message" iconMsg={<Image src={warning} alt="error"/>}/>
				<Input
          placeholder="Avec dropdown"
          state="default"
          iconRight
          iconRightImage={<Image src={dropdown} alt="icone" />}
        />
				<Input
          placeholder="Désactivé avec dropdown"
          state="disabled"
          iconRight
          iconRightImage={<Image src={dropdown} alt="icone" />}
        />
				<Input
          placeholder="Désactivé avec dropdown"
          state="disabled"
          iconRight
					iconRightImage={<Image src={dropdown} alt="icone-right" />} 
					iconLeft
					iconLeftImage={<Image src={icon} alt="icone-left" />} // Icône à gauche		
        />
				<Input
          placeholder="Désactivé avec dropdown"
          state="default"
          iconRight
					iconRightImage={<Image src={dropdown} alt="icone-right" />} 
					iconLeft
					iconLeftImage={<Image src={icon} alt="icone-left" />} // Icône à gauche		
        />
      </div>
		</div>
	);
}
