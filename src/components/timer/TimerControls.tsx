import Button from "../ui/Button";

export default function TimerControls() {
    return (
        <div className="mt-8 flex justify-center gap-4">
            <Button>Start</Button>
            
            <Button className="bg-zinc-700 hover:bg-zinc-600">
                Pause
            </Button>

            <Button className="bg-red-600 hover:bg-red-500">
                Reset
            </Button>
        </div>
    );
}