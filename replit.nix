{ pkgs ? import <nixpkgs> {} }: {
	deps = [
		pkgs.yarn
	];
}