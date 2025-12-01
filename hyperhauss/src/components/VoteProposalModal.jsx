import { useState } from "react";
const VoteProposalModal = ({
  isOpen,
  onClose,
  onVote,
  guildId,
  proposalId,
}) => {
  const [voteYes, setVoteYes] = useState(true);
  const [formError, setFormError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await onVote(guildId, proposalId, voteYes);
      setFormError("");
      onClose();
    } catch (error) {
      console.error("Error voting on proposal:", error);
      setFormError(error.message || "Failed to vote on proposal");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Vote on Proposal</h2>
        {formError && (
          <div className="text-red-500 text-sm mb-4">{formError}</div>
        )}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Vote</label>
          <select
            value={voteYes}
            onChange={(e) => setVoteYes(e.target.value === "true")}
            className="w-full border border-[#1e2a46] rounded-lg px-3 py-2 outline-none"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-300 text-black"
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-lg bg-[#1e2a46] text-white disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? "Voting..." : "Submit Vote"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoteProposalModal;
