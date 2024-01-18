export async function fetchGraphQL(query: string) {
    const url = Deno.env.get("PORTFOLIO_API") as string
    const response = await fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        query,
        }),
    });
    
    return await response.json();
} 