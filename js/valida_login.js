function login()
		{
			let usuario = document.getElementById("usuario").value;
			let password = document.getElementById("password").value;	

			if(usuario == "admin" && password == "12345")
			{
        document.location.href="inventario.html";
			}
			else
			{
				alert("Datos incorrectos");
			}
		}