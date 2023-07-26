#!/usr/bin/env python3

product = str(input("Entrez le nom du produit"))
print(product)

price = float(input("Entrez le prix du produit"))
print(price)

message = f"Produit {product} crée au prix de {price} € HT."

print(message)

tva = price * (20 / 100)
priceTTC = price + tva

messageTTC = f"Avec la TVA vous devrez payer {priceTTC} € TTC"

print(messageTTC)

