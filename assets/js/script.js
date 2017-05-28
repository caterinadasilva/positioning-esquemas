function esquemas() {
	var uno = document.getElementById('uno');
	var cajaL = document.createElement('div');
	cajaL.classList.add('caja-grande');
	var cajaM = document.createElement('div');
	cajaM.classList.add('caja-mediana');
	var cajaS = document.createElement('div');
	cajaS.classList.add('caja-peque');
	cajaM.appendChild(cajaS);
	cajaL.appendChild(cajaM);
	uno.appendChild(cajaL);

	var dos = document.getElementById('dos');
	var cajaL = document.createElement('div');
	cajaL.classList.add('caja-grande');
	var cajaM = document.createElement('div');
	cajaM.classList.add('caja-mediana');
	var cajaS = document.createElement('div');
	cajaS.classList.add('caja-peque');
	cajaL.appendChild(cajaS);
	cajaL.appendChild(cajaM);
	dos.appendChild(cajaL);
}