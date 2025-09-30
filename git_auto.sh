# git_auto.sh
#!/bin/bash
# Script automatizzato per gestire il push sui branch develop e main

# Colori per il terminale
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Funzione per elencare i branch disponibili
list_branches() {
    echo -e "${BLUE}Branch disponibili:${NC}"
    git branch | grep -v "^*" | sed 's/^[ 	]*//'
    echo -e "${BLUE}Branch attuale:${NC}"
    git branch | grep "^*" | sed 's/^* //'
    echo
}

# Elenca i branch disponibili
list_branches

# Prompt per il messaggio di commit
read -p "Inserisci il messaggio di commit: " commit_msg

# Aggiunge e committa i file modificati
git add .
git commit -m "$commit_msg"

# Chiede all'utente su quale branch pushare
echo -e "${YELLOW}Su quale branch vuoi pushare? (default: develop)${NC}"
read branch_to_push

# Se non viene specificato un branch, usa develop
if [ -z "$branch_to_push" ]; then
    branch_to_push="develop"
fi

# Controllo se il branch esiste
if ! git show-ref --verify --quiet refs/heads/$branch_to_push; then
    echo -e "${YELLOW}Il branch $branch_to_push non esiste. Vuoi crearlo? (y/n)${NC}"
    read create_branch
    if [ "$create_branch" == "y" ]; then
        git checkout -b $branch_to_push
    else
        echo -e "${YELLOW}Operazione annullata${NC}"
        exit 1
    fi
else
    # Checkout sul branch selezionato
    git checkout $branch_to_push
fi

# Push sul branch selezionato
git push origin $branch_to_push

echo -e "${GREEN}✔️ Push completato su $branch_to_push!${NC}"

# Chiede se si vuole fare il push anche su main
read -p "Vuoi continuare con il merge e il push su main? (y/n): " continue_main


if [ "$continue_main" == "y" ]; then
    # Esegue le operazioni su main
    git checkout main
    git merge $branch_to_push
    
    echo -e "${YELLOW}Stai per eseguire un push sul branch main. Sei sicuro? (y/n)${NC}"
    read confirm_main_push
    
    if [ "$confirm_main_push" == "y" ]; then
        git push origin main
        echo -e "${GREEN}✔️ Push su main completato!${NC}"
    else
        echo -e "${GREEN}Push su main annullato.${NC}"
    fi
else
    echo -e "${GREEN}✔️ Processo completato, push su main saltato.${NC}"
fi

# Ritorna al branch originale
git checkout $branch_to_push

echo -e "${GREEN}✔️ Operazioni completate!${NC}"