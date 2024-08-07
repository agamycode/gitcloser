"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SecondaryButton = (props: any) => {
	return (
		<>
			{props.useClassicButton ? (
				<motion.div
					className="
            leading-[1.3] py-[9px] px-[12px] mr-[8px] mb-[8px] text-[20px] inline-block text-zinc-300 border-zinc-800 border-solid border-[1px] 
            bg-zinc-800/40 rounded-[10px] hover:bg-zinc-800/80 hover:border-zinc-700 hover:transition-all hover:duration-100 hover:ease-out
            "
					whileTap={{
						scale: 0.95,
					}}
				>
					{props.icon && (
						<FontAwesomeIcon
							icon={props.icon}
						/>
					)}
					<span
						className={`${props.icon ? "ml-[8px] hidden sm:inline-block" : "inline-block"}`}
					>
						{props.text || "Text"}
					</span>
				</motion.div>
			) : (
				<>
					{props.useNextLink ? (
						<Link href={props.link || "/"}>
							<motion.div
								className="
            leading-[1.3] py-[9px] px-[12px] mr-[8px] mb-[8px] text-[20px] inline-block text-zinc-300 border-zinc-800 border-solid border-[1px] 
            bg-zinc-800/40 rounded-[10px] hover:bg-zinc-800/80 hover:border-zinc-700 hover:transition-all hover:duration-100 hover:ease-out
            "
								whileTap={{
									scale: 0.95,
								}}
							>
								{props.icon && (
									<FontAwesomeIcon
										icon={
											props.icon
										}
									/>
								)}
								<span
									className={`${props.icon ? "ml-[8px] hidden sm:inline-block" : "inline-block"}`}
								>
									{props.text ||
										"Text"}
								</span>
							</motion.div>
						</Link>
					) : (
						<motion.a
							href={props.link || "/"}
							target="_blank"
							className="
            leading-[1.3] py-[9px] px-[12px] mr-[8px] mb-[8px] text-[20px] inline-block text-zinc-300 border-zinc-800 border-solid border-[1px] 
            bg-zinc-800/40 rounded-[10px] hover:bg-zinc-800/80 hover:border-zinc-700 hover:transition-all hover:duration-100 hover:ease-out
            "
							whileTap={{
								scale: 0.95,
							}}
						>
							{props.icon && (
								<FontAwesomeIcon
									icon={
										props.icon
									}
								/>
							)}
							<span
								className={`${props.icon ? "ml-[8px] hidden sm:inline-block" : "inline-block"}`}
							>
								{props.text ||
									"Text"}
							</span>
						</motion.a>
					)}
				</>
			)}
		</>
	);
};

export const SmallerSecondaryButton = (props: any) => {
	return (
		<>
			<motion.button
				className="
leading-[0.6] py-[9px] px-[12px] mr-[8px] mb-[8px] text-[20px] inline-block text-zinc-300 border-zinc-800 border-solid border-[1px] 
bg-zinc-800/40 rounded-[10px] hover:bg-zinc-800/80 hover:border-zinc-700 hover:transition-all hover:duration-100 hover:ease-out
"
				whileTap={{ scale: 0.95 }}
				onClick={props.onClick}
			>
				{props.icon && (
					<FontAwesomeIcon icon={props.icon} />
				)}
				<span
					className={`${props.icon ? "ml-[8px] hidden sm:inline-block" : "inline-block"} text-sm`}
				>
					{props.text || "Text"}
				</span>
			</motion.button>
		</>
	);
};
