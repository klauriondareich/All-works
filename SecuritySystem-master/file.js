// This script is about a identification system with defined before identities //

function checkId()
{
	let name = document.getElementById('nom').value;
	let message;
	let afficheMessage;
	let password = document.getElementById('code').value;
	let personInfo = [
		{
			nom : 'laurion',
		 	password : 'kld1997'
		},
		{
			nom : 'agnesvie',
		 	password : 'agn1997'
		},
		{
			nom : 'immaculée',
		 	password : 'ima1997'
		},
		{
			nom : 'rodalsi',
		 	password : 'rod1997'
		},
		{
			nom : 'béni',
		 	password : 'ben1997'
		}
	];
	name = name.toLowerCase();
	let fullIdentity = name.split(' ');
	try
	{
		if (typeof name ==! String)
		{
			throw 'Utilisez les lettres et non des chiffres pour votre ID';
		}
		else if (fullIdentity.length === 2)
		{
			throw 'Veuillez saisir un identifiant correct';
		}
		else if (name === '' || password === '')
		{
			throw 'Veuillez renseignez tous les champs';

		}
		else
		{
			for (let person of personInfo)
			{
				if ((name === person.nom) && (password === person.password))
				{
					message = 'vos informations sont correctes';
					break;
				}
				else
				{
					message = 'vos informations sont incorrectes';
				}
			}
		}
	}
	catch(e)
	{
		alert(e);
	}
	afficheMessage = confirm(message + ' confirmez vous l\'envoi\'?');
	if (afficheMessage === true)
	{
		alert('Merci');
	}
	else
	{
		alert('Corriger vos informations');
	}
}
