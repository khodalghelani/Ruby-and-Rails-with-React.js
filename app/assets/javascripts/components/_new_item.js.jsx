var NewItem= React.createClass({ 
    
    handleClick() { 
        var title = this.refs.title.value; 
        var description = this.refs.description.value; 
        var author = this.refs.author.value; 
        var tags = this.refs.tags.value; 
        var created_at = this.refs.created_at.value; 
        var updated_at = this.refs.updated_at.value;
        
        $.ajax({ 
            url: '/api/v1/items', 
            type: 'POST', 
            data: { item: { title: title, description: description, author: author, tags: tags, created_at:created_at, updated_at: updated_at } }, 
            success: (item) => { 
                this.props.handleSubmit(item); 
            } 
        }); 
    },
    
    
    render() { 
        return ( 
            <div> 
                <input ref='title' placeholder='Enter the title of the item' /> 
                <input ref='description' placeholder='Enter a description' /> 
                <input ref='author' placeholder='Enter name of author' /> 
                <input ref='tags' placeholder='Enter tags' /> 
                <input ref='created_at' placeholder='Enter date of creation' />
                <input ref='updated_at' placeholder='Enter date of updation' /> 
                 
                <button onClick={this.handleClick}>Submit</button> 
            </div> 
        ) 
    } 
});
